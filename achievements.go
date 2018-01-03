package main

import (
	"github.com/FlorentinDUBOIS/achievements/cmd"
	log "github.com/sirupsen/logrus"
)

func main() {
	if err := cmd.RootCmd.Execute(); err != nil {
		log.Fatal(err)
	}
}
